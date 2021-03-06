import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { TextInput, Button } from 'react-native-paper';
import _ from 'lodash'

import { cmsApi } from '../actions';
import { loginStlye, commonStlye } from '../styles/styles';
import { common } from '../js';
import * as constants from '../constants'


const Login = () => {
    const action = useDispatch();

    // state
    const [empNo, setEmpNo] = useState(''); // 사번
    const [empPw, setEmpPw] = useState(''); // 비밀번호
    const [isSecretPw, setIsSecretPw] = useState(true); // 비밀번호 숨김여부


    // screen function start

    // 로그인 유효성검사
    const validate = () => {
        if (_.isEmpty(empNo)) {
            common.showAlertMsg(action, '사번을 입력하세요.');
            return;
        }

        let str = _.toNumber(empNo);
        if (_.isNaN(str) || !_.isNumber(str) || str.toString().length != 8) {
            common.showAlertMsg(action, '잘못된 사번입니다.');
            return;
        }

        if (_.isEmpty(empPw)) {
            common.showAlertMsg(action, '비밀번호를 입력하세요.');
            return;
        }

        if (!common.chkPwReg(empPw)) {
            common.showAlertMsg(action, '비밀번호는 문자, 숫자, 특수문자를 포함하여 8~16자 이내로 입력하여야 합니다.');
            return;
        }

        // 로그인
        action(cmsApi.loginReuest({ empNo, empPw }));
    }

    // 토큰보유시 자동로그인
    const checkToken = async () => {
        try {
            const token = await common.getAsyncStore(constants.CMS_AUTH_TOKEN);
            if (!_.isEmpty(token)) {
                // 토큰으로 로그인
                action(cmsApi.loginReuest({}));
            }
        } catch (e) {
            console.log('checkToken error', e);
        }
    }

    // screen function end


    useEffect(() => {
        // setEmpNo('22010101');
        // setEmpPw('qweasd1122!');

        checkToken(action);
    }, []);

    return (
        <View style={commonStlye.defalutView}>
            <View style={commonStlye.container}>
                <View style={{ width: '100%' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={loginStlye.logo}
                            source={require('../../assets/bil_500.png')}
                        />
                    </View>
                    <TextInput
                        mode='outlined'
                        label='사번'
                        style={loginStlye.input}
                        value={empNo}
                        keyboardType='number-pad'
                        maxLength={8}
                        onChangeText={(text) => setEmpNo(text)}
                    />
                    <TextInput
                        mode='outlined'
                        label='비밀번호'
                        secureTextEntry={isSecretPw}
                        right={<TextInput.Icon name={isSecretPw ? 'eye' : 'eye-outline'} onPress={() => setIsSecretPw(!isSecretPw)} />}
                        style={loginStlye.input}
                        value={empPw}
                        maxLength={20}
                        onChangeText={(text) => setEmpPw(text)}
                    />
                    <Button
                        mode="contained"
                        onPress={() => validate()}
                        style={loginStlye.button}
                    >로그인</Button>
                </View>
            </View>
        </View >
    );
}

export default Login;
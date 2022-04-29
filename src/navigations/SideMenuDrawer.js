import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AttendenceReg, ProjectMng, SideMenu, PasswordMng } from '../screens'


const Drawer = createDrawerNavigator();

const SideMenuDrawer = () => {
  const isInitPw = useSelector(state => state.emp.empInfo.isInitPw);

  return (
    <Drawer.Navigator
      // initialRouteName={isInitPw == 'true' ? '비밀번호변경' : '출퇴근기록'}
      initialRouteName={isInitPw == 'true' ? '비밀번호변경' : '프로젝트관리'}
      drawerContent={({ navigation }) => <SideMenu navigation={navigation} />}
    >
      <Drawer.Screen name='출퇴근기록' component={AttendenceReg} />
      <Drawer.Screen name='프로젝트관리' component={ProjectMng} />
      <Drawer.Screen name='비밀번호변경' component={PasswordMng} />
    </Drawer.Navigator>
  );
};

export default SideMenuDrawer;
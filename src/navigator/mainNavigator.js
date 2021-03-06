import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps20214791Navigator from '../features/Maps20214791/navigator';
import ArticleList214773Navigator from '../features/ArticleList214773/navigator';
import ArticleList214772Navigator from '../features/ArticleList214772/navigator';
import ArticleList214771Navigator from '../features/ArticleList214771/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps20214791: { screen: Maps20214791Navigator },
ArticleList214773: { screen: ArticleList214773Navigator },
ArticleList214772: { screen: ArticleList214772Navigator },
ArticleList214771: { screen: ArticleList214771Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer

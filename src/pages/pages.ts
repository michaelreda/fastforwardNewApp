import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { ItemDetailPage } from './item-detail/item-detail';
import { AddSimulationPage } from './add-simulation/add-simulation';
import { UserProfilePage } from './user-profile/user-profile';
import { AdminProfilePage } from './admin-profile/admin-profile';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = UserProfilePage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ListMasterPage;
export const Tab2Root = SearchPage;
export const Tab3Root = SettingsPage;

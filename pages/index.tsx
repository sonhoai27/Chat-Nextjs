
import initStore from '../config/store';
const store = initStore()
import App from "../components/app";
import Page from './page'
export default Page(App, store);
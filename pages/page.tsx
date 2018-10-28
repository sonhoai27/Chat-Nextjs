import { Provider } from 'react-redux';
import * as React from 'react'
import initStore from '../config/store';
const store = initStore()
const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}
export default page
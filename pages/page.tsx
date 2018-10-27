import { Provider } from 'react-redux';
import * as React from 'react'
const page = (Page, store) => {
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
interface Props { children: JSX.Element | JSX.Element[] }

import Sidebar from './Sidebar';

export const Layout2 = ({ children }: Props) => {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            TTTT
            <main role="main" className="wrapper">
                <div className="content">
                    {children}
                </div>
            </main>
        
        </div>
    )
}
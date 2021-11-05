import type { NextPage } from "next";
import Navbar from "../src/components/navbar/navbar";
import { linkData } from "../src/ts/componentsProps";

const testLinks : linkData[] = [{url: '/', text: 'Home' }, {url: '/test', text: 'TestPage'}]

const TestPage : NextPage = () => {
    return(
        <div>
            <Navbar withLogo logo='/matthew-henry-U5rMrSI7Pn4-unsplash.jpg' withLinks links={testLinks} withUser />
        </div>
    )
}

export default TestPage
import {TopNavigation, ClassDetailHeader} from '../../../components'
import {useHistory} from 'react-router-dom'
import './index.css'

function ClassProgress() {
    const route = useHistory()
    return (
        <div className="class__detail">
            <TopNavigation label="Know more Javascript" onClick={route.goBack} />
            <div className="class__detail-body">
                <ClassDetailHeader />
                <div className="class__detail-information">
                    <div className="class__detail-information-header">
                        <p className="active">Information</p>
                        <p>Class Progress</p>
                        <p>Class Discussion</p>
                    </div>
                    <div className="class__detail-information-body">
                        <h1>Description</h1>
                        <p>Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This class helps you get started with JavaScript and furthers your understanding of what is possible.</p>
                        <h1>What will I learn?</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. </li>
                        </ul>
                        <h1>Content 2</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassProgress

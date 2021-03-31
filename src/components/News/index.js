import {DMNews1} from '../../assets'
import './index.css'

function News() {
    return (
        <div className="news">
            <h1 className="news__header">News</h1>
            <div className="news__body">
                <img className="news__image" src={DMNews1} alt="News"/>
                <div className="news__content">
                    <h1 className="news__title">New update for front end development class sylabus!</h1>
                    <div className="news__toggle">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News

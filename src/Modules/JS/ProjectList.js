
import '../CSS/ProjectList.css';
function ProjectList(){
    return(
        <div className="ProjectWrapper">

            <div className="ProjectRow">
                <div className="ProjectElement">
                    <div className="ProjectTitle"><h2 class="ProjectTitleText"></h2></div>
                    <div className="ProjectDescription"></div>
                    <a className="ProjectLink" href="#" target="_blank"></a>
                </div>

                <div className="ProjectElement">
                    <div className="ProjectTitle"><h2 class="ProjectTitleText"></h2></div>
                    <div className="ProjectDescription"></div>
                    <a className="ProjectLink" href="#" target="_blank"></a>
                </div>
            </div>

            <div className="ProjectRow">
                <div className="ProjectElement">
                    <div className="ProjectTitle"><h2 class="ProjectTitleText"></h2></div>
                    <div className="ProjectDescription"></div>
                    <a className="ProjectLink" href="#" target="_blank"></a>
                </div>

                <div className="ProjectElement">
                    <div className="ProjectTitle"><h2 class="ProjectTitleText"></h2></div>
                    <div className="ProjectDescription"></div>
                    <a className="ProjectLink" href="#" target="_blank"></a>
                </div>
            </div>

        </div>
    );
}
export default ProjectList;
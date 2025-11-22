import JobsList from "./Jobs";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
function Body() {
    return(
        <>
            <div className="body">
                <SidebarLeft/>
                <JobsList/>
                <SidebarRight/>
            </div>
        </>
    )
}
export default Body;
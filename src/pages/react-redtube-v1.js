
import Comment from "../components/Comment";

export default function ReactRedtubeV1() {

    const comments= [
        {uuid: '1', text:'abc'},
        {uuid: '1', text:'abc'},
        {uuid: '1', text:'abc'},
        {uuid: '1', text:'abc'},
        {uuid: '1', text:'abc'},
        {uuid: '1', text:'abc'},
        {uuid: '1', text:'abc'}
    ];
    return (<>
        {comments.map((comments, key)=>{
            return (<Comment cmtUUID={key} ></Comment>);
        })}
    </>);
}
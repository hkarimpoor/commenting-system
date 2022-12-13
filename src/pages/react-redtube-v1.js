
import Comment from "../components/Comment";

export default function ReactRedtubeV1() {

    const comments= [
        {uuid: '1', text:'abc'},
        {uuid: '2', text:'abc'},
        {uuid: '3', text:'abc'},
        {uuid: '4', text:'abc'},
        {uuid: '5', text:'abc'},
        {uuid: '6', text:'abc'},
        {uuid: '7', text:'abc'}
    ];
    return (<>
        {comments.map((comment, key)=>{
            return (<Comment comment={comment} key={comment.uuid}></Comment>); 
        })}
    </>);
}
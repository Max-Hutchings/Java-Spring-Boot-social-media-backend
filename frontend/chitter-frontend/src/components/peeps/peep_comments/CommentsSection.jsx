import PeepComment from "./PeepComment.jsx";
import {useEffect, useState} from "react";
import callGetComments from "../../../services/apis/GetCommentsEndpoint.jsx";


export default function CommentsSection({peepId, addedComment}){

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const responseData = await callGetComments({ peepId });
                const sortedComments = responseData.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
                setComments(sortedComments);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [peepId, addedComment]);

    return(
        <div role={"comment-section"}>
            {!loading && comments.length > 0 ? (
                comments.map((comment) => (
                    <PeepComment key={comment.id} commentId={comment.id} commentUser={comment.accountUsername} commentText={comment.commentContent}/>
                ))
            ) : (
                <div>
                    No comments yet... be the first!
                </div>
            )}
        </div>
    )
}
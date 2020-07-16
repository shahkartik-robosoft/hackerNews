import * as React from "react";
import { getPageNo } from "../../utils";
import HackerNewItem from "../organisms/HackerNewItem/HackerNewItem";
import {PAGES} from "../../constants";
import TextArea from "../atoms/TextArea/TextArea";
import './Comments.scss';
import CustomButton from "../atoms/CustomButton/CustomButton";
import CommentsList from "./HackerNewHome/CommentsList";

const Comments: React.FC = () => {
    const [commentId, setCommentId] = React.useState<number>(0);
    const [kidsList, setKidsList] = React.useState<Array<number>>([]);
    React.useEffect(() => {
        setCommentId(getPageNo(location.search, "id"));
    }, [location.search]);
    if (commentId !== 0) {
        return  (
            <div className="comments">
                <HackerNewItem itemId={commentId} page={PAGES.COMMENTS} updateKidsList={(kidsList) => setKidsList(kidsList)} />
                <TextArea placeholder="" />
                <CustomButton>add comment</CustomButton>
                {
                    kidsList.map((kid, index) => (
                        <React.Fragment key={index}>
                            <CommentsList kid={kid} />
                        </React.Fragment>
                    ))
                }
            </div>
        )
    } else {
        return <div/>;
    }
};

export default Comments;

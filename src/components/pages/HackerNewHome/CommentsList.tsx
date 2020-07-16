import * as React from "react";
import apis from "../../../api/apiCalls";
import {formatData} from "../../../utils";
import {IHackerNewItem} from "../../organisms/HackerNewItem/HackerNewItem";
import './CommentList.scss';
import Text from "../../atoms/Text/Text";

interface ICommentsList {
    kid: number,
}

const CommentsList: React.FC<ICommentsList> = props => {
    const [commentDetails, steCommentDetails] = React.useState<IHackerNewItem>();
    React.useEffect(() => {
        const subscription = apis
            .fetchItems(props.kid)
            .subscribe((response: any) => {
                steCommentDetails(formatData(response.data));
            });
        return () => {
            subscription.unsubscribe();
        };
    }, [props.kid]);
    if (commentDetails !== undefined) {
        return  (
            <div className="commentList">
                <div className="commentList_details">
                    <Text textLabel={commentDetails!.pointsBy} className="text_subtitle" />
                    <Text textLabel={commentDetails!.time} className="text_subtitle" />
                </div>
                    <div dangerouslySetInnerHTML={{ __html: commentDetails!.html! }} />
                {
                    commentDetails.kids && commentDetails.kids!.map((kid, index) => {
                        return (
                            <React.Fragment key={index}>
                                <CommentsList kid={kid} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    } else  {
        return  <div />
    }
};

export default CommentsList;
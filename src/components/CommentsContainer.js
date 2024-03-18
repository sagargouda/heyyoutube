import React from 'react';
import { PiFinnTheHumanBold } from "react-icons/pi";
function CommentsContainer(props) {

    const commentData = [
        {
            name: 'sagar',
            comment: 'Nice video!',
            replies: [
                {
                    name: 'bunny',
                    comment: 'Thanks, Sagar!',
                    replies: [
                        {
                            name: 'fluffy',
                            comment: 'Yeah, it made me laugh!',
                            replies: [
                                {
                                    name: 'sparky',
                                    comment: 'Same here! 😄',
                                    replies: [
                                        {
                                            name: 'snuggles',
                                            comment: 'I almost fell off my chair laughing!',
                                            replies: [
                                                {
                                                    name: 'giggles',
                                                    comment: 'Haha, this is hilarious!',
                                                    replies: [
                                                        {
                                                            name: 'whiskers',
                                                            comment: 'I can\'t stop laughing! 🤣',
                                                            replies: [
                                                                {
                                                                    name: 'snoopy',
                                                                    comment: 'Me neither, it\'s too funny!',
                                                                    replies: [
                                                                        {
                                                                            name: 'dizzy',
                                                                            comment: 'My cheeks hurt from laughing so much!',
                                                                            replies: [
                                                                                {
                                                                                    name: 'snickers',
                                                                                    comment: 'I need a break, I\'m laughing too hard! 😂',
                                                                                    replies: [
                                                                                        {
                                                                                            name: 'gummy',
                                                                                            comment: 'Best video ever! 🎉',
                                                                                            replies: []
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];



    const Comment = ({data}) =>{
        const {name ,comment , replies} = data
        return <div className="flex mt-2 shadow-2xl bg-gray-100 p-2 rounded-lg">
            <PiFinnTheHumanBold size={20}/>
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    }


    const CommentList = ({comments}) =>{
        return comments.map(comment =>(
            <div>
                <Comment data={comment}/>
                <div className="pl-5 border border-l-black ml-5">
                   <CommentList comments={comment.replies}/>
                </div>
            </div>

        )
                )

    }


    return (
        <div className="m-5 p-2">
           <h1 className="text-2xl font-bold ">Comments: </h1>
            <CommentList comments={commentData}/>
        </div>
    );
}

export default CommentsContainer;
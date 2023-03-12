import React from 'react'

const commentsData=[
    {
    name:"Mithilesh Prajapati",
    text:"Lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
    },
    {
        name:"Ajay Prajapati",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[ {
            name:"Mithilesh Prajapati",
            text:"Lorem ipsum dolor sit amet, consectetur adip",
            replies:[ {
                name:"Mithilesh Prajapati",
                text:"Lorem ipsum dolor sit amet, consectetur adip",
                replies:[  {
                    name:"Mithilesh Prajapati",
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    replies:[ {
                        name:"Mithilesh Prajapati",
                        text:"Lorem ipsum dolor sit amet, consectetur adip",
                        replies:[  {
                            name:"Mithilesh Prajapati",
                            text:"Lorem ipsum dolor sit amet, consectetur adip",
                            replies:[ {
                                name:"Mithilesh Prajapati",
                                text:"Lorem ipsum dolor sit amet, consectetur adip",
                                replies:[ {
                                    name:"Mithilesh Prajapati",
                                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                                    replies:[ {
                                        name:"Mithilesh Prajapati",
                                        text:"Lorem ipsum dolor sit amet, consectetur adip",
                                        replies:[ {
                                            name:"Mithilesh Prajapati",
                                            text:"Lorem ipsum dolor sit amet, consectetur adip",
                                            replies:[]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    name:"Mithilesh Prajapati",
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    replies:[]
                    }, {
                        name:"Mithilesh Prajapati",
                        text:"Lorem ipsum dolor sit amet, consectetur adip",
                        replies:[]
                        }, {
                            name:"Mithilesh Prajapati",
                            text:"Lorem ipsum dolor sit amet, consectetur adip",
                            replies:[]
                            }]
            }]
        },
        {
            name:"Mithilesh Prajapati",
            text:"Lorem ipsum dolor sit amet, consectetur adip",
            replies:[]
            },

            {
                name:"Mithilesh Prajapati",
                text:"Lorem ipsum dolor sit amet, consectetur adip",
                replies:[]
                },
                {
                    name:"Mithilesh Prajapati",
                    text:"Lorem ipsum dolor sit amet, consectetur adip",
                    replies:[]
                    },
                    {
                        name:"Mithilesh Prajapati",
                        text:"Lorem ipsum dolor sit amet, consectetur adip",
                        replies:[]
                        },
        {
          name:"Mithilesh Prajapati",
        text:"Lorem ipsum dolor sit amet, consectetur adip",
         replies:[]
         } ,
         {
         name:"Mithilesh Prajapati",
         text:"Lorem ipsum dolor sit amet, consectetur adip",
        replies:[]
     }                   

]
const CommentBase=({comment})=>{
    const {name,text,replies}=comment
    return ( <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
    <img
      className="w-12 h-12"
      alt="user"
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    />
    <div className="px-3">
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  </div>)

}
const CommentList=({data})=>{
    return data.map((comment,index)=>{
        return(<div key={index}>
            <CommentBase comment={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
            <CommentList data={comment.replies}/>
            </div>
            </div>)

    })


}
const Comment = () => {
  return (
    <div >
    <h1 className='font-bold text-2xl'>Comments :</h1>
    <CommentList data={commentsData}/>
    
    
    </div>
  )
}

export default Comment
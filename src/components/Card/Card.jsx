/* eslint-disable react/prop-types */

const Card = ({post}) => {
    console.log(post);
    const {id, category, image, isActive, title, author, description, comment_count, view_count,  posted_time} = post;

    return (
        <div className="flex gap-6 p-10 rounded-2xl mb-6 border-2 border-gray-400 shadow-lg">
            <div className="">
                <div className="flex justify-end"><span className={isActive? 'bg-green-600 rounded-full p-2' : 'bg-red-500 rounded-full p-2'}></span></div>
                <img className="w-20 rounded-xl" src={image} alt="" />
            </div>
            <div className="space-y-3  w-full">
                <div className="flex gap-5 font-bold">
                    <p># {category}</p>
                    <p>Authora: {author.name}</p>
                </div>
                <h2 className="font-black text-xl">{title}</h2>
                <p className="text-base opacity-70">{description}</p>

                <div className="pt-5 border-t-2 border-dashed border-gray-400 flex justify-between">
                    <div className="flex gap-6">
                    <span className="flex gap-2 items-center opacity-70 font-medium"><i className="text-xl fa-solid fa-comment-dots"></i>{comment_count}</span>
                    <span className="flex gap-2 items-center opacity-70 font-medium"><i className="fa-solid fa-eye"></i>{view_count}</span>
                    <span className="flex gap-2 items-center opacity-70 font-medium"><i className="fa-solid fa-clock"></i>{posted_time}</span>
                    </div>
                    <div><button className="btn bg-[#10B981] rounded-full border-none"><i className="fa-solid fa-envelope"></i></button></div>
                </div>
            </div>
        </div>
    );
};

export default Card;
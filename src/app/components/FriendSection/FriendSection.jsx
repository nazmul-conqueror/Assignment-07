import FriendCard from "./FriendCard";




const friendsPromise = async function (){
    const res = await fetch("http://localhost:3000/friends.json")
    const data = await res.json();
    return data;
}

const FriendSection = async() => {
    const friends = await friendsPromise();
    console.log(friends)

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-3">Your Friends</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends.map(friend => {
          return <FriendCard key={friend.id} friend={friend}/>;
        })}
         </div>
        </div>
    );
};

export default FriendSection;

// 1. Import the JSON directly (adjust the path based on your folder structure)
// import friends from "../../../../public/friends.json";
// import FriendCard from "./FriendCard";

// const FriendSection = () => {
//     // 2. No need for async/await or fetch!
//     console.log(friends);

//     return (
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-xl font-bold mb-3">Your Friends</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {friends.map(friend => (
//                     <FriendCard key={friend.id} friend={friend} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FriendSection;

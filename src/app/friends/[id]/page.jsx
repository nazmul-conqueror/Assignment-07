import { notFound } from "next/navigation";
import { FiArchive, FiClock, FiMessageSquare, FiPhone, FiTrash2, FiVideo } from "react-icons/fi";

const FriendPromise = async function () {
    const res = await fetch("http://localhost:3001/friends.json")
    const data = await res.json();
    return data;
}

const FriendDetails = async ({ params }) => {
    const friends = await FriendPromise();
    const { id } = await params;

    const friend = friends.find((friend) => friend.id == id)
    // console.log(friend, "apps")

       if (!friend) notFound();

    return (
        <div className="max-w-6xl mx-auto p-8 bg-base-200 min-h-screen">
            <div className="grid grid-cols-12 gap-6">

                {/* --- SIDEBAR --- */}
                <div className="col-span-12 md:col-span-3 space-y-4">
                    {/* Profile Card */}
                    <div className="card bg-base-100 shadow-sm border border-base-300 items-center p-6 text-center">
                        <div className="avatar mb-4">
                            <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2 ring-gray-100">
                                <img src={friend.picture} alt={friend.name} />
                            </div>
                        </div>
                        <h1 className="text-xl font-bold">{friend.name}</h1>

                        <div className="flex flex-col gap-2 mt-3">
                            <div className="badge badge-error text-white font-bold text-[10px] uppercase">
                                {friend.status}
                            </div>
                            <div className="badge badge-success badge-outline font-bold text-[10px] uppercase">
                                {friend.tags[0]}
                            </div>
                        </div>

                        <p className="text-gray-500 italic mt-6 text-sm italic">"{friend.bio}"</p>
                        <p className="text-xs text-base-content/50 mt-4 font-medium uppercase tracking-tight">Preferred: Email</p>
                    </div>

                    {/* Action Menu (daisyUI Menu Component) */}
                    <ul className="menu bg-base-100 w-full rounded-xl border border-base-300 p-0 shadow-sm overflow-hidden">
                        <li>
                            <button className="flex justify-center gap-2 py-4 rounded-none hover:bg-base-200">
                                <FiClock size={16} /> Snooze 2 Weeks
                            </button>
                        </li>
                        <hr className="border-base-300" />
                        <li>
                            <button className="flex justify-center gap-2 py-4 rounded-none hover:bg-base-200">
                                <FiArchive size={16} /> Archive
                            </button>
                        </li>
                        <hr className="border-base-300" />
                        <li>
                            <button className="flex justify-center gap-2 py-4 rounded-none text-error hover:bg-error/10">
                                <FiTrash2 size={16} /> Delete
                            </button>
                        </li>
                    </ul>
                </div>

                {/* --- MAIN CONTENT --- */}
                <div className="col-span-12 md:col-span-9 space-y-6">

                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="card bg-base-100 border border-base-300 p-8 shadow-sm items-center">
                            <span className="text-4xl font-bold text-base-content">{friend.days_since_contact}</span>
                            <span className="text-[10px] uppercase font-bold text-base-content/40 mt-2">Days Since Contact</span>
                        </div>
                        <div className="card bg-base-100 border border-base-300 p-8 shadow-sm items-center">
                            <span className="text-4xl font-bold text-base-content">{friend.goal}</span>
                            <span className="text-[10px] uppercase font-bold text-base-content/40 mt-2">Goal (Days)</span>
                        </div>
                        <div className="card bg-base-100 border border-base-300 p-8 shadow-sm items-center text-center">
                            <span className="text-xl font-bold text-base-content mt-2">
                                {new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="text-[10px] uppercase font-bold text-base-content/40 mt-3">Next Due</span>
                        </div>
                    </div>

                    {/* Goal Card */}
                    <div className="card bg-base-100 border border-base-300 p-6 shadow-sm flex-row justify-between items-center">
                        <div>
                            <h3 className="text-sm font-bold opacity-70">Relationship Goal</h3>
                            <p className="text-sm">Connect every <span className="font-bold text-base-content">{friend.goal} days</span></p>
                        </div>
                        <button className="btn btn-sm btn-outline btn-ghost border-base-300 font-bold capitalize">Edit</button>
                    </div>

                    {/* Quick Check-In */}
                    <div className="card bg-base-100 border border-base-300 p-8 shadow-sm">
                        <h3 className="text-sm font-bold opacity-70 mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center gap-3 p-8 border border-base-200 rounded-2xl hover:bg-primary/5 hover:border-primary transition group">
                                <FiPhone className="text-base-content/60 group-hover:text-primary" size={24} />
                                <span className="text-sm font-medium">Call</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-8 border border-base-200 rounded-2xl hover:bg-primary/5 hover:border-primary transition group">
                                <FiMessageSquare className="text-base-content/60 group-hover:text-primary" size={24} />
                                <span className="text-sm font-medium">Text</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-8 border border-base-200 rounded-2xl hover:bg-primary/5 hover:border-primary transition group">
                                <FiVideo className="text-base-content/60 group-hover:text-primary" size={24} />
                                <span className="text-sm font-medium">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FriendDetails;
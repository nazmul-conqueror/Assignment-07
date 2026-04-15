import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#1a4031] text-white flex flex-col grow items-center justify-center">
            <div>
                <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>
                <p className="max-w-md text-sm opacity-80 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <div>
                    <h3 className="footer-title opacity-100 text-base normal-case mb-4">Social Links</h3>
                    <div className="grid grid-flow-col gap-4">
                        <button >
                            <FaInstagram size={18} />
                        </button>
                        <button>
                            <FaFacebookF size={18} />
                        </button>
                        <button>
                            <FaXTwitter size={18} />
                        </button>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;

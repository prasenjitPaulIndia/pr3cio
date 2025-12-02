'use client';

import { IconBrandFacebook, IconBrandInstagram, IconBrandPinterest, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#181818]">
            <div className="font__poppins">
                <div className="max-w-7xl mx-auto flex justify-around flex-wrap gap-12 mb-12 px-6 pt-12">
                    <div>
                        <h3 className="font-bold mb-4">Site map</h3>
                        <ul className="space-y-2 text-sm font-normal">
                            <li><Link href="#" >Home</Link></li>
                            <li><Link href="#" >Watch Videos</Link></li>
                            <li><Link href="#" >Artist</Link></li>
                            <li><Link href="#" >Photos</Link></li>
                            <li><Link href="#" >Message</Link></li>
                            <li><Link href="#" >Contact us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm font-normal">
                            <li><Link href="#" >About</Link></li>
                            <li><Link href="#" >Media</Link></li>
                            <li><Link href="#" >Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-pr-magenta font-bold mb-4">Join us</h3>
                        <div className="flex gap-4">
                            <a href="#" ><IconBrandFacebook className="w-5 h-5" /></a>
                            <a href="#" ><IconBrandX className="w-5 h-5" /></a>
                            <a href="#" ><IconBrandInstagram className="w-5 h-5" /></a>
                            <a href="#" ><IconBrandYoutube className="w-5 h-5" /></a>
                            <a href="#" ><IconBrandPinterest className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm font-normal">
                            <li><Link href="#" >Terms of condition</Link></li>
                            <li><Link href="#" >Privacy policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-pr-blue font-bold mb-4">Sign up for exclusive updates</h3>
                        <div className="flex w-full">
                            <input type="email" placeholder="Enter your email id here" className="max-w-[180px] w-full p-4 border border-[#B5B0AB] rounded-l-full bg-pr-dark text-pr-text-muted focus:outline-none text-xs" />
                            <button className="btn-1 rounded-s-none! font-semibold!">Subscribe Now</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#101010] text-center p-6">
                    <p className="text-pr-text-muted text-sm">&copy; 2024 Pr3cio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

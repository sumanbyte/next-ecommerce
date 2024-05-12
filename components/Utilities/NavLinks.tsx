import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { changeNav } from '@/redux/entities/navbar'
import { useEffect, useState } from 'react';


export function Search() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    // useEffect(()=> {
    //     router.push(`/search?q=${search}`)
    // }, [search]);

    return (
        <div className="pt-4 mx-6 ">
            <div className='flex items-center shadow-2xl shadow-blue-500/20'>
                <AiOutlineSearch className='text-4xl mr-2 ' />
                    <input className="px-2 py-2 text-2xl w-full outline-none rounded-md   placeholder:text-2xl placeholder:tracking-wider" type="text" placeholder="Search products" onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            dispatch(changeNav({ type: '7', selectedText: 'search' }))
                            router.push(`/search?q=${search}`)
                        }
                    }}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                <hr />
            </div>

            <div className='mt-6 '>
                <p>Complete Collection →</p>
                <p>New Arrivals →</p>
                <p>Best Sellers →</p>
                <p>Special Offers →</p>
            </div>
        </div>
    )
}


export function Categories() {
    return (
        <>
            <p>Men&#39;s Fashion</p>
            <p>Women&#39;s Fashion</p>
            <p>Electronics</p>
            <p>Home & Living</p>
            <p>Beauty & Health</p>
            <p>Kids & Babies</p>
            <p>Books & Stationery</p>
            <p>Food & Beaverages</p>
            <p>Automotive</p>
            <p>Jewelry and Accessories</p>
            <p>Pets</p>
            <p>Arts & Crafts</p>
        </>
    )
}
export function Brands() {
    return (
        <>
            <p>Nike</p>
            <p>Apple</p>
            <p>Samsung</p>
            <p>Adidas</p>
            <p>Amazon Basics</p>
            <p>Sony</p>
            <p>Microsoft</p>
            <p>HP</p>
            <p>Levi&#39;s</p>
            <p>Puma</p>
            <p>Zara</p>
            <p>Google</p>


        </>
    )
}
export function Collections() {
    return (
        <>
            <p>Summer Essentials</p>
            <p>Winter Warmers</p>
            <p>Trending Now</p>
            <p>Best Sellers</p>
            <p>Exclusive Deals</p>
            <p>Special Occasions</p>
            <p>New Arrivals</p>
            <p>Sale Items</p>
            <p>Work From Home</p>
            <p>Travel Must-Haves</p>
            <p>Fitness & Activewear</p>
            <p>Gift Ideas</p>


        </>
    )
}
export function Deals_And_Offers() {
    return (
        <>
            <p>Clearance Sale</p>
            <p>Daily Deals</p>
            <p>Seasonal Offers</p>
            <p>Bundle Deals</p>
            <p>Flash Sales</p>
            <p>Limited Time Offers</p>
            <p>Discounted Products</p>
            <p>BOGO Deals</p>
            <p>Free Shipping</p>
            <p>Gift with Purchase</p>
            <p>Student Discounts</p>
            <p>Referral Rewards</p>

        </>
    )
}
export function Support() {
    return (
        <>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Returns & Exchanges</p>
            <p>Shipping Info</p>
            <p>Live Chat</p>
            <p>Order Tracking</p>
            <p>Size Guide</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Payment Methods</p>
            <p>Product Support</p>
            <p>Feedback & Suggestions</p>

        </>
    )
}
export function Options() {
    return (
        <>
            <p>Account Settings</p>
            <p>Notifications</p>
            <p>Privacy Preferences</p>
            <p>Dark Mode</p>
            <p>Language Preferences</p>
            <p>Security & Authentication</p>
            <p>Email Subscriptions</p>
            <p>App Integrations</p>
            <p>Data Usage</p>
            <p>Customization</p>
            <p>Help & Support</p>
            <p>Log Out</p>

        </>
    )
}

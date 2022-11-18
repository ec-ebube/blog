import React from "react";
import paperCloud from "./Images/paperCloud.gif";
import PaperCloud2 from "./Images/paperCloud2.gif";
import Appstore from "./Images/appstore.png";
import Playstore from "./Images/playstore.png";
import Fidi from "./Images/fidi.png";
import Tenny from "./Images/tenny.png";
import Adeyemo from "./Images/adeyemo.png";
import Osa from "./Images/osa.png";
import Bal from "./Images/balogun.png";
import Eze from "./Images/ezechukwu.png";
import Laptop from "./Images/Laptop.png";
import Ipad from "./Images/ipad.png";
import Iphone from "./Images/iPhone.png";
import Month from "./Images/month1.png";
import Lifetime from "./Images/lifetime.png";
import Year from "./Images/month12.png";

function Body() {
    return (
        <div className="body">
            <div className="firstSection">
                <div className="text1">
                    <h1>
                        Your personal<br></br>
                        <span className="bold">Business</span> Manager
                    </h1>
                    <span className="styled-text">
                        That saves you hours of tedious paper work.
                    </span>
                    <p className="main-text1">
                        Whether you're a Creator, a Freelancer, or a Business owner
                        PaperCloud makes it super easy to close deals 2x faster, either from
                        our phone, iPad or computer.<br></br>
                        <br></br>
                        With a simple, and straight forward user interface. You can create
                        beautiful Invoices in seconds, organise your customers data in one
                        place, automatically track your income, inventory, expenses, and
                        profits on the go.<br></br>
                        <img src={Appstore} alt="" className="appstore"></img>
                        <img src={Playstore} alt="" className="playstore"></img>
                    </p>
                </div>
                <img src={paperCloud} alt="" className="gif1"></img>
                <div className="for-bg1"></div>
            </div>
            <div className="secondSection">
                <div className="text2">
                    <div className="for-text2-head">
                        <h2>
                            Stay on top of
                            <span className="bold2"> things</span>
                        </h2>
                        <p className="main-text2">
                            With your business data and content living in different apps and
                            sheets of paper, it’s harder than ever to stay on top of things.
                            <b>PaperCloud</b> makes it easy to have all your customer data,
                            notes, invoices, inventory, previous balance, payments / order
                            history, and business expenses in one app — making it readily
                            available to you at any given point in time.
                        </p>
                    </div>

                    <div className="for-cards">
                        <div className="invoices">
                            <h4>Invoices</h4>
                            <p className="in-card">
                                Create professional looking Invoice in seconds. Customise your
                                invoice with your company logo and colour, set a tax rate, or
                                give discounts, and track payments — when you’re done, you can
                                choose to either download your invoice as a PDF, send it via
                                email, WhatsApp or DM.
                            </p>
                        </div>
                        <div className="expenses">
                            <h4>Expenses</h4>
                            <p className="in-card">
                                Expenses Track all personal or business expense with ease.
                                Categorise the type of expense with more 50 different
                                categories. See sum total of all your expenses and cash profits
                                for a given month at glance.
                            </p>
                        </div>
                        <div className="client-folder">
                            <h4>Client Folder</h4>
                            <p className="in-card">
                                Just like a physical folder — Client Folder is a collection of
                                all your customer’s data neatly organised into one place. Their
                                phone number, email, shipping address, order history, invoices,
                                notes, and most importantly a track record of all their
                                payments, and balance they might be owing you.
                            </p>
                        </div>
                        <div className="notes">
                            <h4>Notes</h4>
                            <p className="in-card">
                                With Notes you can save specific information about your
                                customer, whether it’s their body measurements, shipping
                                address, order details, or any form of written content that you
                                need to remember about them.
                            </p>
                        </div>
                        <div className="contacts">
                            <h4>Contacts</h4>
                            <p className="in-card">
                                <b>PaperCloud</b> makes it possible for you to separate your
                                business contacts from your personal contacts. You can also
                                group your business contacts by leads ( clients you’re yet to
                                close as customers ) or customer ( clients that have paid for
                                your product or service in the past ).
                            </p>
                        </div>
                        <div className="inventory-tracking">
                            <h4>Inventory Tracking</h4>
                            <p className="in-card">
                                With Catalog you can bring your inventory or the services you
                                offers into PaperCloud. And as you sell from your inventory
                                PaperCloud automatically keeps track of what’s left in stock.
                                Saving you time and stress of doing any manual work.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="forthefreetrial">
                    <div className="free-trial">
                        Use <b>paperCloud</b> free for <b>14 days</b>
                    </div>
                </div>
            </div>
            <div className="thirdSection">
                <div className="for-gif2">
                    <img src={PaperCloud2} alt="" className="gif2"></img>
                </div>
                <div className="for-text3">
                    <h2>
                        <span className="ligth3"> Everything at your </span>
                        <span className="bold3"> Fingertips</span>
                    </h2>
                </div>
                <div className="text3">
                    <div className="for-text3-head">
                        <h3>
                            <span className="ligthfirst3"> With </span>
                            <span className="third-bold"> Universial Search </span>
                        </h3>
                        <p className="main-text3">
                            You can search across all your records — Notes, Invoices,
                            Contacts, and Expenses from a unified search bar using keywords or
                            a phrase. The universal search makes it super easy to find
                            anything you’re looking for with ease.
                        </p>
                    </div>
                </div>
            </div>
            <div className="for-bg3"></div>
            <div className="forthSection">
                <div className="section4">
                    <div className="for-text4">
                        <h2>
                            <span className="ligth4"> Don’t take our word for it </span>
                            <span className="bold4"> — take theirs </span>
                        </h2>
                    </div>
                    <div className="for-cards2">
                        <img src={Fidi} alt="" className="fidi"></img>
                        <img src={Tenny} alt="" className="Tenny"></img>
                        <img src={Adeyemo} alt="" className="Adeyemo"></img>
                        <img src={Osa} alt="" className="Osa"></img>
                        <img src={Bal} alt="" className="Bal"></img>
                        <img src={Eze} alt="" className="Eze"></img>
                    </div>
                </div>
                <div className="for-bg4"></div>
            </div>
            <div className="fifthSection">
                <div className="fifth-text-head">
                    <h2>
                        <span className="ligth5">
                            {" "}
                            Accessible Anywhere — even if you’re{" "}
                        </span>
                        <span className="bold5"> Offline </span>
                    </h2>
                    <div className="main-text5">
                        You can access all your business information, customer details,
                        notes, invoices, and expense reports, from any of your favourite
                        devices — even if you’re offline.
                    </div>
                </div>
                <div className="for-bg5"></div>
                <div className="images5">
                    <img src={Ipad} alt="" className="ipad"></img>
                    <img src={Laptop} alt="" className="laptop"></img>
                    <img src={Iphone} alt="" className="iphone"></img>
                </div>
                <div className="lower-text">
                    <p className="free-trial5">
                        Use <b>paperCloud</b> free for <b>14 days</b>
                    </p>
                    <p className="upper-text55">
                        …See how easy it makes running your business.
                    </p>
                    <p className="low-text5">
                        Start your 14 days free trial. No credit card required. No strings
                        attached.
                    </p>
                </div>
            </div>
            <div className="sixthSection">
                <div className="text6">
                    <h2>
                        <span className="bold6">PaperCloud </span>
                        <span className="light6"> Pricing</span>
                    </h2>
                    <p className="maintext6">
                        <b>PaperCloud</b> has a simple pricing with no hidden costs. You can
                        switch between plans at any time. Cancel any time to end your
                        subscription, and you won’t be charged again.
                    </p>
                </div>
                    <div className="images6">
                        <img src={Month} alt="" className="month"></img>
                        <img src={Lifetime} alt="" className="life"></img>
                        <img src={Year} alt="" className="year"></img>
                    </div>
                <div className="free-trial6">
                    Use <b>paperCloud</b> free for <b>14 days</b>
                </div>
                <p className="low-text6">
                    Start your 14 days free trial. No credit card required. No strings
                    attached.
                </p>
            </div>
        </div>
    );
}

export default Body;

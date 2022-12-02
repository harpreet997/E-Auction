import React, { useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { TbTriangleInverted } from 'react-icons/tb';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import "../styles/First.css";

const First = () => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="App">
            <div className="row ms-4">
                <div className="col-lg-6 mb-3">
                    <h3 className="color align-text">E-Auctioning</h3>
                </div>
                <div className="col-lg-5 mb-3 greetings-column">
                    <p className="greetings">Greetings</p>
                    <button className="rounded-pill logout-button"><AiOutlinePoweroff />Logout</button>
                    <h4>Riaz Corporation Pvt. Ltd.</h4>
                </div>
            </div>

            <div className="row ms-4">
                <div className="col-lg-7">
                    <div className="card mb-3">
                        <div className="card-body">
                            <p className='fw-bold me-2 d-inline color auction-id'>Auction ID</p>
                            <p className='fw-bold me-2 d-inline'>DRE334112</p>
                            <p className='fw-bold ms-4 me-2 d-inline color'>Project Number</p>
                            <p className='fw-bold d-inline'>123456123444145</p>
                            <p className='fw-bold ms-4 me-2 d-inline color'>PR Number</p>
                            <p className='fw-bold d-inline'>8244678809</p><br />
                            <p className='fw-bold me-2 d-inline color project-name'>Project Name</p>
                            <p className='fw-bold d-inline'>New upgrades for marina mall (Project coding Region)</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline rank">Rank</h6>
                                            <h6 className="d-inline ms-4">Bid Value</h6><br />
                                            <h6 className="d-inline me-1">1</h6>
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <h6 className="d-inline fs-4 color">3</h6>
                                            <h6 className="d-inline ms-5 fs-4 color">1,02,000</h6>
                                            <h6 className="d-inline ms-5"><TbTriangleInverted className='rank-downward-icon' /></h6>
                                            <h6 className="d-inline">7000 AED</h6>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <p className='d-inline me-2'>Auction Ends in</p>
                                    <button className="me-2 hours-button"
                                    >08<br /><p className='fs-6'>Hours</p></button>
                                    <button className="me-2 hours-button">24<br /><p className='fs-6'>Mins</p></button>
                                    <button className='hours-button'>04<br /><p className='fs-6'>Sec</p></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-light" >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className='fw-bold align-text'>Reduced Bid Amount</p>
                                    <input type="number" className='rounded-pill input' placeholder='2,000' />
                                    <p className='align-text'><RiErrorWarningLine className='rank-downward-icon' />Minimum decrement amount is 1000 AED</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='fw-bold ms-4'>New offering (Calculated)</p>
                                    <p className='fs-5 fw-bold number'>1,00,000</p>
                                    <button className='btn btn-primary rounded-pill w-50'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-2">
                                    <BsClockHistory />
                                </div>
                                <div className="col-lg-3">
                                    <h6 >History</h6>
                                </div>
                                <div className="col-lg-1">
                                </div>

                                <div className="col-lg-3">
                                    <h6 className='pointer' onClick={() => setIsActive(true)}>My Bid</h6>
                                </div>
                                <div className="col-lg-3">
                                    <h6 className='pointer' onClick={() => setIsActive(false)}>Updates</h6>
                                </div>
                            </div>
                            {isActive ? (
                                <>
                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline history-rank">Rank</h6>
                                            <h6 className="d-inline ms-4">Bid Value</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <h6 className="d-inline fs-4">3</h6>
                                            <h6 className="d-inline ms-5 me-2 fs-4 color">1,02,000</h6>
                                            <h6 className="d-inline ms-2"><TbTriangleInverted className='rank-downward-icon' /></h6>
                                            <h6 className="d-inline me-1">7000 AED</h6>
                                            <h6 className="d-inline">2 Min ago</h6>
                                        </div>
                                    </div>

                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline history-rank">Rank</h6>
                                            <h6 className="d-inline ms-4">Bid Value</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <h6 className="d-inline fs-4">4</h6>
                                            <h6 className="d-inline ms-5 me-2 fs-4 color">1,02,000</h6>
                                            <h6 className="d-inline ms-1"><TbTriangleInverted className='rank-downward-icon' /></h6>
                                            <h6 className="d-inline me-1">10000 AED</h6>
                                            <h6 className="d-inline">2 Min ago</h6>
                                        </div>
                                    </div>

                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline history-rank">Rank</h6>
                                            <h6 className="d-inline ms-4">Bid Value</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <h6 className="d-inline fs-4">5</h6>
                                            <h6 className="d-inline ms-5 me-2 fs-4 color">1,12,000</h6>
                                            <h6 className="d-inline ms-2"><TbTriangleInverted className='rank-downward-icon' /></h6>
                                            <h6 className="d-inline me-1">4000 AED</h6>
                                            <h6 className="d-inline">2 Min ago</h6>
                                        </div>
                                    </div>

                                    <div className="card mb-5 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline history-rank">Rank</h6>
                                            <h6 className="d-inline ms-4">Bid Value</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <h6 className="d-inline fs-4">6</h6>
                                            <h6 className="d-inline ms-5 me-4 fs-4 color">1,16,000</h6>
                                            <h6 className="d-inline ms-5"></h6>
                                            <h6 className="d-inline me-3"></h6>
                                            <h6 className="d-inline">15 Min ago</h6>
                                        </div>
                                    </div>
                                    <p>Last Updated : 19.11.2022 </p>
                                </>
                            ) :
                                <>
                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline">Announcement</h6>
                                            <h6 className="d-inline ms-4">10 mins ago</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <p className="d-inline update-fontSize">Only 3.5 days are remaining for auction to end.
                                                If you haven't made your final decision you still have some time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline">Announcement</h6>
                                            <h6 className="d-inline ms-4">10 mins ago</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <p className="d-inline update-fontSize" >Only 3.5 days are remaining for auction to end.
                                                If you haven't made your final decision you still have some time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline">Announcement</h6>
                                            <h6 className="d-inline ms-4">10 mins ago</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <p className="d-inline update-fontSize">Only 3.5 days are remaining for auction to end.
                                                If you haven't made your final decision you still have some time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-2 bg-light">
                                        <div className="card-body">
                                            <h6 className="d-inline">Announcement</h6>
                                            <h6 className="d-inline ms-4">10 mins ago</h6><br />
                                            <h6 className="d-inline"><BsFillTriangleFill className='rank-upper-icon' /></h6>
                                            <p className="d-inline update-fontSize">Only 3.5 days are remaining for auction to end.
                                                If you haven't made your final decision you still have some time.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default First;
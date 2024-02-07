import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Component }
from 'react';
import axios from 'axios';

import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'
import Home from './pages/Home'
import Payment from './pages/Payment'
import Faq from './pages/help/Faq'
import NotFound from './pages/NotFound'
import Contact from './pages/help/Contact'
import Careers from './pages/careers/Careers'

        const router = createBrowserRouter(
                createRoutesFromElements(
                        <Route path="/" element={ < RootLayout / > }  >
                            <Route index element={ < Home / > } />
                            <Route path="payment" element={ < Payment / > } />
                            <Route path="help" element={ < HelpLayout / > }>
                                <Route path="faq" element={ < Faq / > } />
                                <Route path="contact" element={ < Contact / > } />
                            </Route>
                            <Route path="careers" element={ < CareersLayout / > }>
                                <Route index element={ < Careers / > } />
                            </Route>
                            
                            <Route path="*" element={<NotFound />} />
                        </Route>
                                                    )
                                            );

                            class App extends Component {

                                constructor(props) {
                                    super(props);
                                    this.state = {
                                        users: []
                                    }
                                    this.api_url = 'https://nlp.fantasyligasuper.com';
                                }

//init
                                componentDidMount() {
                                  //  this.refreshUsers()
                                }

                                async refreshUsers() {
                                    const response = await axios.get(this.api_url + '/users')
                                    const data = await response.data
                                    this.setState({
                                        users: data,
                                    })
                                }

                                async addClick() {
                                    var userName = document.getElementById('userName').value;
                                    const data = new FormData();
                                    data.append("name", userName);
                                    const config = {
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    };
                                    const res = await axios.post(this.api_url + '/add', data, config)
                                    alert('SUCCESS ADD')
                                    this.refreshUsers();
                                }

                                async deleteClick(id) {
                                    const res = await axios.delete(this.api_url + '/delete?user_id=' + id)
                                    alert('SUCCESS DELETE')
                                    this.refreshUsers();
                                }

                                render() {
                                    return (
                                            <RouterProvider router={router}  />
                                            );
                                }

                            }

                            export default App;

import { Menu, Switch } from '@headlessui/react';
import { useState } from 'react';

const UserProfile = ({img,logout}) => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div>

            <Menu>
                <Menu.Button>
                    <img className='w-8 h-8 rounded-full object-cover' src={img} alt="" />
                </Menu.Button>
                <Menu.Items className='shadow-md shadow-slate-600 mt-4 absolute  z-50 flex flex-col bg-white px-4 w-[200px] py-4 right-10 '>
                    hello



                    <button className='myBtn px-3 py-2 my-2 rounded-sm bg-orange-600' onClick={logout}>
                        Log Out
                    </button>

                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-[#ef9273]' : 'bg-indigo-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${enabled ? 'translate-x-6 bg-black' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-black transition`}
                        />
                    </Switch>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default UserProfile;
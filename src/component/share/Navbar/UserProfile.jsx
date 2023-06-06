import { Menu, Switch } from '@headlessui/react';
import { useState } from 'react';

const UserProfile = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div>

            <Menu>
                <Menu.Button>
                    <img className='w-8 h-8 rounded-full object-cover' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
                </Menu.Button>
                <Menu.Items className='shadow-md shadow-slate-600 mt-4 absolute flex flex-col bg-white px-2 w-[100px] py-4 right-10'>
                    hello
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
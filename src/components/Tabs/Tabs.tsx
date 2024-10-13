import React from 'react';
import style from './Tabs.module.scss';
import classNames from 'classnames';

interface Tab {
    label: string;
}

interface Props {
    tabs: Tab[];
    activeTab: string;
    setActiveTab: (tabLabel: string) => void;
}

const Tabs: React.FC<Props> = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className={style.tabsContainer}>
            {tabs.map((tab) => (
                <button
                    key={tab.label}
                    className={classNames(style.tab, activeTab === tab.label && style.active)}
                    onClick={() => setActiveTab(tab.label)}
                >
                    {tab.label}
                </button>
            ))}
            <div
                className={style.highlight}
                style={{
                    transform: `translateX(${tabs.findIndex(tab => tab.label === activeTab) * 100}%)`,
                    width: `${100 / tabs.length}%`,
                    borderRadius: 7,
                }}
            />
        </div>
    );
};

export default Tabs;

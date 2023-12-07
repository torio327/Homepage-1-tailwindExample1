import React from 'react';

interface NewsItem{
    date:string;
    title:string;
    content:string;
}

const NewsList: React.FC = () => {
    const list: NewsItem[] = [
        {
            date: '2023.11.13',
            title: 'イベント',
            content: '11月13日に名古屋芸術会館三階でプログラミングセミナーを行います',
        },
        {
            date:'2023.11.10',
            title:'イベント',
            content:'11月13日に名古屋芸術会館三階でプログラミングセミナーを行います'
        },
        {
            date: '2023.11.13',
            title: 'イベント',
            content: '11月13日に名古屋芸術会館三階でプログラミングセミナーを行います',
        },
        {
            date:'2023.11.10',
            title:'イベント',
            content:'11月13日に名古屋芸術会館三階でプログラミングセミナーを行います'
        },{
            date: '2023.11.13',
            title: 'イベント',
            content: '11月13日に名古屋芸術会館三階でプログラミングセミナーを行います',
        },
        {
            date:'2023.11.10',
            title:'イベント',
            content:'11月13日に名古屋芸術会館三階でプログラミングセミナーを行います'
        },{
            date: '2023.11.13',
            title: 'イベント',
            content: '11月13日に名古屋芸術会館三階でプログラミングセミナーを行います',
        },
        {
            date:'2023.11.10',
            title:'イベント',
            content:'11月13日に名古屋芸術会館三階でプログラミングセミナーを行います'
        },{
            date: '2023.11.13',
            title: 'イベント',
            content: '11月13日に名古屋芸術会館三階でプログラミングセミナーを行います',
        },
        {
            date:'2023.11.10',
            title:'イベント',
            content:'11月13日に名古屋芸術会館三階でプログラミングセミナーを行います'
        },{
            date: '2023.11.13',
            title: 'イベント',
            content: '11月13日に名古屋芸術会館三階でプログラミングセミナーを行います',
        },
        {
            date:'2023.11.10',
            title:'イベント',
            content:'11月13日に名古屋芸術会館三階でプログラミングセミナーを行います'
        },
        // ... (other items)
    ];

    return (
        <>
            <div className="m-10 max-h-80 overflow-auto ">
                {list.map(({ date, title, content }, index) => (
                    <div className="arti" key={index}>
                        <hr />
                        <p>{new Date(date).toLocaleDateString()}</p>
                        <p>{title}</p>
                        <p>{content}</p>
                    </div>
                ))}
                <hr />
            </div>
        </>
    );
};

export default NewsList;

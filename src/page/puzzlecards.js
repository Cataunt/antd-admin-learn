import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';


const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    // console.log(cardList)
    // console.log(state)
    // console.log(namespace)
    return {
        cardList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`,
            });
        },
    };
};


@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
    componentDidCatch() {
        this.props.onDidMount();
    }
    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        )
                    })
                }
                {/* <div>
                    <Button onClick={() => this.props.onClickAdd({
                        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        punchline: 'here we use dva',
                    })}> 添加卡片 </Button>
                </div> */}
            </div>
        )
    }
}
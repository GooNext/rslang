import React from 'react'
import { Link } from 'react-router-dom'
import {
  CalculatorOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  GatewayOutlined,
  SoundOutlined,
  FastForwardOutlined,
  UngroupOutlined,
} from '@ant-design/icons'
import GamePageWrapper from './GamePageWrapper'

export default function GamePage() {
  return (
    <div>
      <div className="header-page">
        <h1 className="game-title">
          Мини-игры
          <CalculatorOutlined />
        </h1>
      </div>
      <GamePageWrapper>
        <section className="grid-container">
          <Link className="audiocall" to="games/audiocall">
            <div className="game-name">
              <CustomerServiceOutlined style={{ fontSize: 64 }} />
              Audio Call
            </div>
          </Link>
          {/* <Link className="memory" to="games/memory">
            <div className="game-name">
              <MessageOutlined style={{ fontSize: 64 }} />
              Memory
            </div>
          </Link> */}
          <Link className="savannah" to="games/savannah">
            <div className="game-name">
              <GatewayOutlined style={{ fontSize: 64 }} />
              Savannah
            </div>
          </Link>
          <Link className="speakit" to="games/speakit">
            <div className="game-name">
              <SoundOutlined style={{ fontSize: 64 }} />
              Speak It
            </div>
          </Link>
          <Link className="sprint" to="games/sprint">
            <div className="game-name">
              <FastForwardOutlined style={{ fontSize: 64 }} />
              Sprint
            </div>
          </Link>
          <Link className="puzzle" to="games/puzzle">
            <div className="game-name">
              <UngroupOutlined style={{ fontSize: 64 }} />
              Puzzle
            </div>
          </Link>
          <div className="center" />
        </section>
      </GamePageWrapper>
    </div>
  )
}

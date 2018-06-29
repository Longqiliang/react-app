import React from 'react'
import ReactDOM from 'react-dom'

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      <div className="card-body">
        <ImgList list={props.list} />
      </div>
      <div className="card-footer" />
    </div>
  )
}

function ListItem(props) {
  return (
    <div className="list-item">
      <img src={props.url} />
    </div>
  )
}

function ImgList(props) {
  const list = props.list
  const listItems = list.map(item => <ListItem key={item.id} url={item.url} />)
  return <div className="list">{listItems}</div>
}

function detailCell() {
  return <div></div>
}

function detail(props) {
  const detail = props.detail
  // const detailItems = detail.list.map()
  return (
    <div className="detail">
      <div>

      </div>
      <div className="detail-label">{detail.label}</div>
    </div>
  )
}

const imgs = [
  {
    type: 1,
    title: '1',
    list: [
      { id: 1, url: '' },
      { id: 2, url: '' },
      { id: 3, url: '' },
      { id: 4, url: '' },
      { id: 5, url: '' },
      { id: 6, url: '' }
    ]
  },
  {
    type: 2,
    title: '2',
    list: [
      { id: 1, url: '' },
      { id: 2, url: '' },
      { id: 3, url: '' },
      { id: 4, url: '' },
      { id: 5, url: '' },
      { id: 6, url: '' }
    ]
  },
  {
    type: 3,
    title: '3',
    list: [
      { id: 1, url: '' },
      { id: 2, url: '' },
      { id: 3, url: '' },
      { id: 4, url: '' },
      { id: 5, url: '' },
      { id: 6, url: '' }
    ]
  }
]

ReactDOM.render(
  <Card list={imgs[0].list} title={imgs[0].title} />,
  document.getElementById('root')
)

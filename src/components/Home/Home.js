import React from 'react'
import { Button, Table } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Table borderless style={{maxWidth:'700px', margin:'0 auto'}}>
                <thead>
                  <tr>
                    <th colSpan="4" className='text-center fs-3'>TOURS</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>JUL16</td>
                  <td>DETROIT, MI</td>
                  <td>DTE ENERGY MUSIC THEATRE</td>
                  <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr><td colSpan="4"><hr /></td></tr>
                <tr>
                  <td>JUL19</td>
                  <td>TORONTO,ON</td>
                  <td>BUDWEISER STAGE</td>
                  <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr><td colSpan="4"><hr /></td></tr>
                <tr>
                  <td>JUL16</td>
                  <td>DETROIT, MI</td>
                  <td>DTE ENERGY MUSIC THEATRE</td>
                  <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr><td colSpan="4"><hr /></td></tr>
                <tr>
                  <td>JUL 22</td>
                  <td>BRISTOW, VA</td>
                  <td>JIGGY LUBE LIVE</td>
                  <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr><td colSpan="4"><hr /></td></tr>
                <tr>
                  <td>JUL 29</td>
                  <td>PHOENIX, AZ</td>
                  <td>AK-CHIN PAVILION</td>
                  <td><Button>BUY TICKETS</Button></td>
                </tr>
                   
                <tr><td colSpan="4"><hr /></td></tr>
              <tr>
                <td>AUG 2</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
                  
              <tr><td colSpan="4"><hr /></td></tr>
              <tr>
                <td>AUG 7</td>
                <td>CONCORD, CA</td>
                <td>CONCORD PAVILION</td>
                <td><Button>BUY TICKETS</Button></td>
              </tr>
                  
              <tr><td colSpan="4"><hr /></td></tr>
          </tbody>
      </Table>
    </>
  )
}

export default Home
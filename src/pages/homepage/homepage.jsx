import React from 'react';
import './homepage.scss';
import Button from '../../components/button/button';
import { BrowserMultiFormatReader } from '@zxing/library';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '---',
      devices: 'devices',
    };
  }

  async componentDidMount() {
    const codeReader = new BrowserMultiFormatReader();

    const devices = await codeReader.listVideoInputDevices();
    this.setState({ devices: devices });
    console.log(devices);

    let code = null;

    try {
      code = await codeReader.decodeOnceFromVideoDevice(
        devices[1].deviceId,
        'video'
      );
    } catch (err) {
      console.log(err);
    }
    
    console.log(code);
    this.setState({ result: code.text });

    // const firstDeviceId = devices[0].deviceId;

    // codeReader
    //   .decodeOnceFromVideoDevice(firstDeviceId, 'video')
    //   .then((result) => console.log(result.text))
    //   .catch((err) => console.error(err));
  }

  render() {
    return (
      <main className="homepage">
        <video id="video"></video>
        <span>
          {this.state.devices[0].deviceId}
          <br />
          {this.state.devices[0].label}
        </span>
        <span>
          {this.state.devices[1].deviceId}
          <br />
          {this.state.devices[0].label}
        </span>
        <span>{this.state.result}</span>
      </main>
    );
  }
}

export default Homepage;

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const faceapi: any;

@Component({
  selector: 'app-facial-recognition',
  templateUrl: './facial-recognition.component.html',
  styleUrls: ['./facial-recognition.component.css']
})
export class FacialRecognitionComponent implements OnInit {
  @ViewChild('video') videoElement!: ElementRef;
  video: any;

  constructor() {
    this.video = null; // Initialisation optionnelle
  }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(this.startVideo.bind(this));
  }

  startVideo() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.video.srcObject = stream;
        })
        .catch(err => console.error(err));
    } else {
      console.error('getUserMedia is not supported on this browser.');
    }
  }

  async recognizeFace() {
    const result = await faceapi.detectSingleFace(this.video).withFaceLandmarks().withFaceDescriptor();
    if (result) {
      console.log(result.descriptor);
    }
  }
}

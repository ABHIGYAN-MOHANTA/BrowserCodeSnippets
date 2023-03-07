// Request permission to access camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    // Create MediaRecorder object and start recording
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    // Stop recording after 5 seconds and save as video file
    setTimeout(() => {
      mediaRecorder.stop();
      const videoBlob = new Blob(mediaChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(videoBlob);
      const videoLink = document.createElement('a');
      videoLink.href = videoUrl;
      videoLink.download = 'my-video.webm';
      document.body.appendChild(videoLink);
      videoLink.click();
    }, 5000);

    // Save audio as file when recording is stopped
    const mediaChunks = [];
    mediaRecorder.addEventListener('dataavailable', event => {
      mediaChunks.push(event.data);
    });
    mediaRecorder.addEventListener('stop', () => {
      const audioBlob = new Blob(mediaChunks, { type: 'audio/webm' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioLink = document.createElement('a');
      audioLink.href = audioUrl;
      audioLink.download = 'my-audio.webm';
      document.body.appendChild(audioLink);
      audioLink.click();
    });
  })
  .catch(error => {
    console.error('Error accessing media devices:', error);
  });

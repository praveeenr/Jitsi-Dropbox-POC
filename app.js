const recordBtn = document.getElementById("record")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
let api;

// IMPORTANT NOTE: For Dropbox recording to work use jitsi Business/Enterprise account. Dropbox wont work on Dev account
const ROOM_NAME = ""
const JWT_TOKEN = ""

const DROPBOX_APP_KEY = ""
const DROPBOX_TOKEN = ""

startBtn.addEventListener('click', () => {
    api = new JitsiMeetExternalAPI("8x8.vc", {
        roomName: ROOM_NAME,
        parentNode: document.querySelector('#jaas-container'),
        configOverwrite: {
            dropbox: {
                appKey: DROPBOX_APP_KEY,
            }
        },
        jwt :JWT_TOKEN
    });
    
})

stopBtn.addEventListener('click', () => {
    api.executeCommand('hangup')
})



recordBtn.addEventListener('click', () => {
    api.executeCommand('startRecording', {
        mode:'file',
        dropboxToken: DROPBOX_TOKEN
    })
})


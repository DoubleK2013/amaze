export default {
    maxFileSize: 1024 * 1024,
    accept: ['image/png'],
    upload: 'public/upload',
    tmp: 'public/tmp',
    url: 'static/upload',
    errorCode: {
        UNACCEPTABLE_TYPE: 1,
        EXCEEDS_THE_MAXIMUM_SIZE: 2,
        SERVER_ERROR: 9
    }
}
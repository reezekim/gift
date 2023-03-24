export async function uploadImage(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
    return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: 'POST',
        body: data,
    })
        .then(res => res.json())
        .then(data => data.url);
}

// export async function uploadVideo(file) {
//     const data2 = new FormData();
//     data2.append('file', file);
//     data2.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
//     return fetch(process.env.REACT_APP_CLOUDINARY_VIDEO_URL, {
//         method: 'POST',
//         body: data2,
//     })
//         .then(res => res.json())
//         .then(data => data.url);
// }
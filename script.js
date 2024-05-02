const wrapper = document.querySelector(".wrapper");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelector(".options");
const searchInp = document.querySelector(".wrapper .content input")


selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});

let countries = ["Việt Nam", "Lào", "Hàn Quốc", "Úc", "Singopo", "Mỹ", "Nhật Bản", "Trung Quốc", "Anh"];

// ----- Ban đầu ----
// const addCountry = () => {
//     let html = ``;
//     countries.forEach(country => {
//         html += `<li onClick="updateName(this)">${country}</li>`;
//     })
//     options.innerHTML = html;
// }

// const updateName = (selectLi) => {
//     console.log(selectLi.innerText)
// }

// addCountry();

// searchInp.addEventListener("keyup", () => {
//     let arr = [];
//     let searchValue = searchInp.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchValue);
//     }).map(data => `<li onClick="updateName(this)">${data}</li>`).join("");

//     console.log(arr);
//     options.innerHTML = arr;
// })
// ----Hết ban đầu-----




// const addCountry = () => {
//     let html = ``;
//     countries.forEach(country => {
//         html += `
//             <li class="item">
//                 <span class="checkbox">
//                     <i class="fa-solid fa-check check-icon"></i>
//                 </span>
//                 <span class="item-text">
//                     ${country}
//                 </span>
//             </li>
//             `;
//     });
//     options.innerHTML = html;

//     // Lấy danh sách các mục mới
//     const items = document.querySelectorAll(".options .item");

//     items.forEach(item => {
//         item.addEventListener("click", () => {
//             item.classList.toggle("checked");

//             let checked = document.querySelectorAll(".options .item.checked");
//             let btnText = document.querySelector(".btn-text");

//             if (checked.length > 0) {
//                 let selectArray = [];
//                 checked.forEach(li => {
//                     const textItem = li.querySelector(".item-text");
//                     selectArray.push(textItem.innerText);
//                     btnText.innerHTML = selectArray.join(", ");
//                 });
//             } else {
//                 btnText.innerHTML = "select country";
//             }
//         });
//     });
// };

// // Gọi hàm addCountry để gán sự kiện click cho danh sách ban đầu
// addCountry();

// //Sau khi tìm kiếm -> có danh sách mới -> bắt sự kiện click cho danh sách này luôn + cập nhật ra giao diện
// searchInp.addEventListener("keyup", () => {
//     let arr = [];
//     let searchValue = searchInp.value.toLowerCase();
//     arr = countries
//         .filter(data => {
//             return data.toLowerCase().startsWith(searchValue);
//         })
//         .map(
//             data => `
//             <li class="item">
//                 <span class="checkbox">
//                     <i class="fa-solid fa-check check-icon"></i>
//                 </span>
//                 <span class="item-text">
//                     ${data}
//                 </span>
//             </li>
//             `
//         ).join("");

//     options.innerHTML = arr;

//     // Lấy danh sách các mục mới
//     const items = document.querySelectorAll(".options .item");

//     // Gán sự kiện click cho các mục mới
//     items.forEach(item => {
//         item.addEventListener("click", () => {
//             item.classList.toggle("checked");

//             let checked = document.querySelectorAll(".options .item.checked");
//             let btnText = document.querySelector(".btn-text");

//             if (checked.length > 0) {
//                 let selectArray = [];
//                 checked.forEach(li => {
//                     const textItem = li.querySelector(".item-text");
//                     selectArray.push(textItem.innerText);
//                     btnText.innerHTML = selectArray.join(", ");
//                 });
//             } else {
//                 btnText.innerHTML = "select country";
//             }
//         });
//     });
// });

// Mảng lưu trữ các mục đã chọn
// Mảng lưu trữ các mục đã chọn
let selectedItems = [];

const addCountry = () => {
    let html = ``;
    countries.forEach(country => {
        // Kiểm tra xem mục đã được chọn trước đó không
        const isChecked = selectedItems.includes(country);
        html += `
            <li class="item ${isChecked ? 'checked' : ''}">
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                <span class="item-text">
                    ${country}
                </span>
            </li>
            `;
    });
    options.innerHTML = html;

    // Lấy danh sách các mục mới
    const items = document.querySelectorAll(".options .item");

    // Gán sự kiện click cho mỗi mục
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");

            // Cập nhật mảng các mục đã chọn
            const countryName = item.querySelector(".item-text").innerText;
            if (selectedItems.includes(countryName)) {
                selectedItems = selectedItems.filter(item => item !== countryName);
            } else {
                selectedItems.push(countryName);
            }

            // Cập nhật nút chọn
            updateSelectedText();
        });
    });
};

// Hàm cập nhật nút chọn
const updateSelectedText = () => {
    let btnText = document.querySelector(".btn-text");

    if (selectedItems.length > 0) {
        btnText.innerHTML = selectedItems.join(", ");
    } else {
        btnText.innerHTML = "select country";
    }

    console.log(selectedItems)
};

// Gọi hàm addCountry để gán sự kiện click cho danh sách ban đầu
addCountry();


// Hàm gán sự kiện click cho các mục
const assignClickEvent = () => {
    const items = document.querySelectorAll(".options .item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            const countryName = item.querySelector(".item-text").innerText;
            if (selectedItems.includes(countryName)) {
                selectedItems = selectedItems.filter(item => item !== countryName);
            } else {
                selectedItems.push(countryName);
            }
            updateSelectedText();
        });
    });
};

// Sau khi search xong thì --> cập nhật checkbox + sự kiện click 
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchValue = searchInp.value.toLowerCase();
    arr = countries
        .filter(data => {
            return data.toLowerCase().startsWith(searchValue);
        })
        .map(
            data => `
                <li class="item">
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    <span class="item-text">
                        ${data}
                    </span>
                </li>
            `).join("");

    options.innerHTML = arr;

    const items = document.querySelectorAll(".options .item");

    // Cập nhật trạng thái (checked hoặc không checked) cho mỗi mục
    items.forEach(item => {
        const countryName = item.querySelector(".item-text").innerText;
        if (selectedItems.includes(countryName)) {
            item.classList.add("checked");
        } else {
            item.classList.remove("checked");
        }
    });

    // Gọi lại hàm updateOptions để cập nhật trạng thái của các mục
    assignClickEvent();
});


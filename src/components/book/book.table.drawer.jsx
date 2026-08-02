import { Drawer } from "antd";

const TableDrawer = (props) => {
  const { dataDrawer, isOpenDrawer, closeDrawer } = props;
  return (
    <>
      {dataDrawer ? (
        <>
          <Drawer
            title="Chi tiết Book"
            onClose={closeDrawer}
            open={isOpenDrawer}
          >
            <p style={{ marginBottom: "13px" }}>ID: {dataDrawer._id}</p>
            <p style={{ marginBottom: "13px" }}>
              Tiêu đề: {dataDrawer.mainText}
            </p>
            <p style={{ marginBottom: "13px" }}>Tác giả: {dataDrawer.author}</p>
            <p style={{ marginBottom: "13px" }}>
              Thể loại: {dataDrawer.category}
            </p>
            <p style={{ marginBottom: "13px" }}>
              Giá tiền:
              {((value) => {
                const first = Math.floor(value / 1000);
                let second = value % 1000;
                if (String(second).length == 1) second = `00` + second;
                if (String(second).length == 2) second = `0` + second;
                return ` ${first}.${second} đ`;
              })(dataDrawer.price)}{" "}
            </p>
            <p style={{ marginBottom: "13px" }}>
              Số lượng: {dataDrawer.quantity}
            </p>
            <p style={{ marginBottom: "13px" }}>Đã bán: {dataDrawer.sold}</p>
            <p style={{ marginBottom: "13px" }}>Thumbnail: </p>
            <div style={{ width: "150px" }}>
              <img
                style={{ width: "100%" }}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDrawer.thumbnail}`}
              />
            </div>
          </Drawer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TableDrawer;

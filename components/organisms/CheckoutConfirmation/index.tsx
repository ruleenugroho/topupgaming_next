import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { setCheckout } from "../../../services/player";

export default function CheckoutConfirmation() {
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter();
  const onSubmit = async () => {
    if (!checkBox) {
      toast.error("Pastikan anda telah melakukan pembayaran");
    } else {
      const dataItemLocal = localStorage.getItem("data_item");
      const dataItem = JSON.parse(dataItemLocal!);
      const dataTopUpLocal = localStorage.getItem("data-topup");
      const dataTopUp = JSON.parse(dataTopUpLocal!);

      const data = {
        voucher: dataItem._id,
        nominal: dataTopUp.nominalItem._id,
        payment: dataTopUp.paymentItem.payment._id,
        bank: dataTopUp.paymentItem.bank._id,
        name: dataTopUp.bankAccountName,
        accountUser: dataTopUp.verifyID,
      };
      const result = await setCheckout(data);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success("Checkout Berhasil");
        router.push("/complete-checkout");
      }
    }
  };
  return (
    <>
      <label
        htmlFor="transfer"
        className="checkbox-label text-lg color-palette-1"
      >
        I have transferred the money
        <input
          type="checkbox"
          id="transfer"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}

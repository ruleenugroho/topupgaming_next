import Link from "next/link";

export default function CheckoutConfirmation() {
  return (
    <>
      <label
        htmlFor="transfer"
        className="checkbox-label text-lg color-palette-1"
      >
        I have transferred the money
        <input type="checkbox" id="transfer" />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <Link href="/complete-checkout">
          <a className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg">
            Confirm Payment
          </a>
        </Link>
      </div>
    </>
  );
}

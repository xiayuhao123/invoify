"use client";

// Components
import { FormInput, Subheading } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

const PaymentInformation = () => {
    const { _t } = useTranslationContext();
    return (
        <section>
            <Subheading>{_t("form.steps.paymentInfo.heading")}:</Subheading>
            <div className="flex flex-row flex-wrap gap-x-20 gap-y-5 mt-5">
                <div className="flex flex-col gap-5">
                    <FormInput
                        name="details.paymentInformation.bankName"
                        label={_t("form.steps.paymentInfo.bankName")}
                        placeholder={_t("form.steps.paymentInfo.bankName")}
                        vertical
                    />
                    <FormInput
                        name="details.paymentInformation.sortCode"
                        label={_t("form.steps.paymentInfo.sortCode")}
                        placeholder={_t("form.steps.paymentInfo.sortCode")}
                        vertical
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <FormInput
                        name="details.paymentInformation.accountName"
                        label={_t("form.steps.paymentInfo.accountName")}
                        placeholder={_t("form.steps.paymentInfo.accountName")}
                        vertical
                    />
                    <FormInput
                        name="details.paymentInformation.accountNumber"
                        label={_t("form.steps.paymentInfo.accountNumber")}
                        placeholder={_t("form.steps.paymentInfo.accountNumber")}
                        vertical
                    />
                </div>
            </div>
        </section>
    );
};

export default PaymentInformation;

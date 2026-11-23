# راه‌اندازی پنل مدیریت

1. پروژه را در GitHub قرار دهید.
2. در [Netlify](https://app.netlify.com/) با همان حساب GitHub وارد شوید و **Add new site → Import an existing project** را بزنید.
3. مخزن را انتخاب کنید. تنظیمات ساخت به‌صورت خودکار تشخیص داده می‌شوند؛ اگر نشد:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. پس از انتشار، از **Site configuration → Identity** گزینه **Enable Identity** را فعال کنید.
5. در همان بخش، از **Registration preferences** گزینه **Invite only** را انتخاب کنید.
6. از تب **Identity**، ایمیل خودتان را با **Invite users** دعوت کنید و ایمیل فعال‌سازی را تأیید کنید.
7. از **Integrations → Git Gateway**، گزینه **Enable Git Gateway** را فعال کنید.

اکنون با رفتن به `https://آدرس-سایت-شما.netlify.app/admin/` وارد پنل می‌شوید. برای تغییر موجودی یک محصول، آن را باز کنید، کلید «موجود است» را تغییر دهید و **Publish** را بزنید. سایت خودکار ظرف چند دقیقه به‌روزرسانی می‌شود.

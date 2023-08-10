import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey('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');
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const message = {
        personalizations: [{
            to: [{
                email: body.email,
            }],
            bcc: [{
                email: 'huestudios.com@gmail.com',
            }, {
                email: 'dana@danablairdesigns.com',
            }]
        }],
        from: {
            email: 'mail@danablairdesigns.com',
            name: 'Dana Blair Designs'
        },

        template_id: 'd-ee97485ec12c43c68819153c887e4613',
        replyTo: {
            email: 'dana@danablairdesigns.com',
            name: 'Dana Blair Designs'
        },
        subject: 'Your Order Confirmation from Dana Blair Designs',
        content: [{
            type: 'text/html',
            value: '&nbsp;'
        }],
        dynamicTemplateData: {
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            phone: body.first_name,
            address_one: body.address_one,
            address_two: body.address_two,
            city: body.city,
            state: body.state,
            zip: body.zip,
            total: body.total,
            promotion: body.promotion,
            shipping_price: body.shipping_price,
            shipping_name: body.shipping_name,
            products: body.products
        },
        categories: [
            'jewelry'
        ],
    };
    sendgrid.send(message)
        .then((res) => console.log(res))
        .catch(error => {
            console.error(error);
        });
    return
})
import { createTransport } from "nodemailer";
import * as functions from "firebase-functions";
import { Request, Response } from "express";

const atlasCodeSMTPServerTranpost = createTransport({
  pool: true,
  host: functions.config().mail_server.host,
  port: 465,
  secure: true,
  auth: {
    user: functions.config().mail_server.auth.user,
    pass: functions.config().mail_server.auth.pass,
  },
});

export const acceptSubmission = async (
  req: Request<{}, {}, { destinationMail: string }, {}>,
  res: Response
) => {
  if (!req.body.destinationMail) {
    return res.status(400).json({
      error: "Formato inválido, é preciso fornecer um e-mail destino",
    });
  }
  let mailOptions = {
    from: "Mapeamento Cultural de Taquara - Sistema - <mapacultural@pro-cidadania.org>",
    to: req.body.destinationMail,
    subject: "Inscrição - Mapeamento Cultural",
    html: `
        <div style="display: flex, flex-direction: column, align-items: center">
        <h1> Retorno a respeito de sua inscrição para participar no Mapeamento Cultural de Taquara </h1>
        </hr>
        <h2>Obrigado pelo interesse em participar do Mapeamento Cultural de Taquara, sua inscrição foi aprovada e seu cadastro passará a aparecer no website principal de agora em diante.</h2>
        <br>
        `,
  };

  atlasCodeSMTPServerTranpost.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ message: "E-mail enviado com sucesso" });
    }
  });
};

export const rejectSubmission = async (
  req: Request<{}, {}, { destinationMail: string; reason?: string }, {}>,
  res: Response
) => {
  let destinationMail: string = req.body.destinationMail;

  if (!req.body.destinationMail) {
    return res.status(400).json({
      error:
        "Formato da requisição inválido, é necessário fornecer o e-mail do destinatário",
    });
  }

  let mailOptions = {
    from: "Mapeamento Cultural de Taquara - Sistema - <mapacultural@pro-cidadania.org>",
    to: destinationMail,
    subject: "Inscrição - Mapeamento Cultural",
    html: `
    <div style="display: flex, flex-direction: column, align-items: center">
    <h1> Retorno a respeito de sua inscrição para participar no Mapeamento Cultural de Taquara </h1>
    </hr>
    <h2>Infelizmente sua inscrição para participar do Mapeamento Cultural de Taquara foi rejeitada</h2>
    <br>

    ${
      req.body.reason!.length > 0
        ? `<h2> A razão pela rejeição é descrita abaixo </h2> <br> <div>${
            req.body!.reason
          }</div>`
        : "<h2> Não foi anexada nenhuma razão específica para rejeição. </h2>"
    }
    </div>`,
  };

  atlasCodeSMTPServerTranpost.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error });
    } else {
      res.status(200).send("E-mail enviado");
    }
  });
};

export const submissionReceived = async (req: Request, res: Response) => {};

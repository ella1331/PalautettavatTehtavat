using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Ika
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private void laskeBT_Click(object sender, EventArgs e)
        {
            DateTime nyt = DateTime.Now;
            DateTime synttarit = synttariDT.Value;
            double erotus = Math.Round((nyt - synttarit).TotalDays);
            paivinaLB.Text = erotus + "";
            paivinaLB.Visible = true;

            DateTime nyt1 = DateTime.Now;
            DateTime synttarit1 = synttariDT.Value;
            double erotus1 = Math.Round((nyt - synttarit).Days / 365.25);
            vuosinaLB.Text = erotus1 + "";
            vuosinaLB.Visible = true;


            DateTime nyt2 = DateTime.Now;
            DateTime synttarit2 = synttariDT.Value;
            double erotus2 = Math.Round((nyt - synttarit).TotalHours);
            tunteinaLB.Text = erotus2 + "";
            tunteinaLB.Visible = true;


            DateTime nyt3 = DateTime.Now;
            DateTime synttarit3 = synttariDT.Value;
            double erotus3 = Math.Round((nyt - synttarit).TotalMinutes);
            minuutteinaLB.Text = erotus3 + "";
            minuutteinaLB.Visible = true;


            DateTime nyt4 = DateTime.Now;
            DateTime synttarit4 = synttariDT.Value;
            double erotus4 = Math.Round((nyt - synttarit).TotalSeconds);
            sekuntteinaLB.Text = erotus4 + "";
            sekuntteinaLB.Visible = true;
        }
    }
}

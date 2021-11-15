﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Laskin
{
    public partial class Nelilaskin : Form
    {
        public Nelilaskin()
        {
            InitializeComponent();
        }

        private void LaskeBT_Click(object sender, EventArgs e)
        {
            float lasku = 0;
            float luku1 = float.Parse(LukuYksiTB.Text);
            float luku2 = float.Parse(LukuKaksiTB.Text);
            string merkki = LaskutoimitusCB.Text;
            switch(merkki)
            {
                case "+":
                    lasku = luku1 + luku2;
                    break;
                case "-":
                    lasku = luku1 - luku2;
                    break;
                case "*":
                    lasku = luku1 * luku2;
                    break;
                case "/":
                    if(luku2 == 0)
                    {
                        VastausLB.Text = "Nollalla ei voi jakaa";
                        goto HYPPY; // voit hyppää laskutoimituksen yli
                    }
                    else
                    {
                        lasku = luku1 / luku2;
                    }
                    break;

               
            }
            VastausLB.Text = lasku + "";
            HYPPY:
            VastausLB.Visible = true;
            
        }
    }
}
